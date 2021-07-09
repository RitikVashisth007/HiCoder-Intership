import React,{useState} from 'react'
import {MainContainer , UpparText, MainContent, ReviewSection} from './ReviewsStyled'
import Review from '../../assets/review.jpg'
import {FaQuoteLeft} from 'react-icons/fa'

import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

const reviewsData = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

function Reviews() {
    const [currentUser, setcurrentUser] = useState(0)
    const nextReviewHandler = () => {
        setcurrentUser(currentUser+1)
        if (currentUser > reviewsData.length - 2) {
            setcurrentUser(0)
        }
    }
    const previousReviewHandler = () => {
        
        if (currentUser === 0) {
            setcurrentUser( reviewsData.length - 2)
            console.log( reviewsData.length);
        }
        else{
            setcurrentUser(currentUser-1)

        }
        
    }

    return (
        <MainContainer>
            <UpparText>
                <p><span style={{color:'#1c3988'}} >THOUGHTS ON HICODER SYLLABUS</span></p>
                <h2>Reviews by Industry Experts </h2>

            </UpparText>
            <MainContent>
                <img src={Review} alt="" />
                <ReviewSection>
                    <FaQuoteLeft/>
                    <p className='review-text' >{reviewsData[currentUser].text}</p>
                    <img src={reviewsData[currentUser].img} alt="" />
                    <p style={{fontWeight:500}} >{reviewsData[currentUser].name}</p>
                    <p style={{fontSize:'15px'}} >{reviewsData[currentUser].job}</p>
                    <div className='button-div'>
                        <button onClick={previousReviewHandler} ><IoIosArrowBack/></button>
                        <button onClick={nextReviewHandler} ><IoIosArrowForward/></button>
                        

                    </div>
                    

                </ReviewSection>
            </MainContent>

        </MainContainer>
    )
}

export default Reviews
