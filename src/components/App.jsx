import { Component } from "react"
import { fetchGallery } from "./http/fetch"
import Notiflix from "notiflix";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import  Modal  from "./Modal/Modal"

export class App extends Component  {
  state = {
    isLoading: false,
    page: 1,
    keyword: "",
    hits: [],
    maxPage: 12,
    hasMore: true,
    largeImg: '',
  }
       
  async componentDidUpdate(prevProps, prevState) {
    const { keyword, page } = this.state;

    if (prevState.keyword !== keyword || prevState.page !== page) {
      try {
        const result = await fetchGallery(keyword, page);
        const hits = result.hits;

        if (hits.length === 0) {
          this.setState({ hasMore: false });
        }

        this.setState((prevState) => ({
          hits: [...prevState.hits, ...hits],
        }));
      } catch (error) {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      } finally {
        this.setState({ isLoading: false,});
      }
    }
  }

  onSubmit = async (keyword, page) => {
    this.setState({
      isLoading: true,
      keyword,
      page,
      hits: [],
      hasMore: true,
    });
  };

  loadMore = () => {
    const { page, maxPage } = this.state;
    if (page < maxPage) {
      this.setState(
        (prevState) => ({
          isLoading: true,
          page: prevState.page + 1,
        }),
      );
    } else {
      this.setState({ hasMore: false, });
    }
  }
  

  openModal = (e) => {
    const largeImg = e.currentTarget.getAttribute("data-large")
    console.log("test", largeImg);
    this.setState({
      largeImg,
    });
  }
  onClose = () => {
    this.setState({ largeImg: '' });
  }

  render() {  
    const {hits, hasMore, isLoading, largeImg} = this.state
    return (
      <>
      <Searchbar onSubmit={this.onSubmit}/>
      <ImageGallery hits={hits} openModal={this.openModal}/>
      {isLoading ? 
        <Loader />
       : 
        <>
          {hits.length > 0 && hasMore && <Button loadMore={this.loadMore} />}
          {largeImg && <Modal largeImg={largeImg} onClose={this.onClose} />}
        </>
      }
    </>
    );
  }
};
