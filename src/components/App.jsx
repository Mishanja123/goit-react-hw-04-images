import { useEffect, useState } from "react";
import { fetchGallery } from "./http/fetch"
import Notiflix from "notiflix";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import  {Modal}  from "./Modal/Modal"

export const App = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [hits, setHits] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [largeImg, setLargeImg] = useState(''); 
  
  useEffect(() => {
  
    const fetchGalleryFunction = async () => {
      setIsLoading(true)
  
        try {
          const result = await fetchGallery(keyword, page);
          const hits = result.hits;
          if (hits.length === 0) {
            setHasMore(false);
            Notiflix.Notify.failure(
              'Sorry, there are no images matching your search query. Please try again.'
            );
          }
          setHits(prevState => page === 1 ? hits : [...prevState, ...hits])
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      }
    if (keyword === '') {
      return;
    } else {
      fetchGalleryFunction()
    }
  }, [keyword, page]);

  // async componentDidUpdate(prevProps, prevState) {
  //   const { keyword, page } = this.state;

  //   if (prevState.keyword !== keyword || prevState.page !== page) {
  //     try {
  //       const result = await fetchGallery(keyword, page);
  //       const hits = result.hits;

  //       if (hits.length === 0) {
  //         this.setState({ hasMore: false });
  //           Notiflix.Notify.failure(
  //           'Sorry, there are no images matching your search query. Please try again.');
  //       }

  //       this.setState((prevState) => ({
  //         hits: [...prevState.hits, ...hits],
  //       }));
  //     } catch (error) {error} 
  //        finally {
  //       this.setState({ isLoading: false,});
  //     }
  //   }
  // }
//  useEffect(() => {
//   const fetchGalleryFunction = asinc () => {
//     setIsLoading(true)
//     if (prevState.keyword !== keyword || prevState.page !== page) {
//       try {
//         const result = await fetchGallery(keyword, page);
//         const hits = result.hits;

//         if (hits.length === 0) {
//           setHasMore(false)
//             Notiflix.Notify.failure(
//               'Sorry, there are no images matching your search query. Please try again.');
//         }
//       setHits(prevState => 
//         [...prevState, ...hits])
//     } catch (error) {
//       console.log(error); 
//     }
//        finally {
//         setIsLoading(false)
//     }
//   }
// }
// }, [hits, hasMore, isLoading])


  const onSubmit = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.elements[1].value.trim();

    setKeyword(keyword);
    setPage(1);
    setHits([])

    e.currentTarget.reset();
  };

  const loadMore = () => {
    if (page < 12) {
      // this.setState(
      //   (prevState) => ({
      //     isLoading: true,
      //     page: prevState.page + 1,
      //   }),
      // );
      setIsLoading(true)
      setPage(page + 1)

    } else {
      setHasMore(false)
    }
  }
  

 const openModal = (e) => {
    const largeImg = e.currentTarget.getAttribute("data-large")
    console.log("test", largeImg);
    setLargeImg(largeImg)
  }
 const onClose = () => {
    setLargeImg('')
  }

    return (
      <>
      <Searchbar onSubmit={onSubmit}/>
      <ImageGallery hits={hits} openModal={openModal}/>
      {isLoading ? 
        <Loader />
       : 
        <>
          {hits.length > 0 && hasMore && <Button loadMore={loadMore} />}
          {largeImg && <Modal largeImg={largeImg} onClose={onClose} />}
        </>
      }
    </>
    );
};
