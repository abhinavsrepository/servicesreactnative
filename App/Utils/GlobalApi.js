import { request, gql } from 'graphql-request'
const MASTER_URL="https://api-ap-south-1.hygraph.com/v2/clrbt4iof1ofk01w7nrgizd1g/master"

const getSlider=async()=>{
    const query = gql`
    query GetSlider {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
      
`
const result=await request(MASTER_URL, query);
return result;

}
const getCategories =async()=>{
  const query =gql`
  query GetCategory {
    categories {
      id
      name
      icon {
        url
      }
    }
  }
  
  `
  const result=await request(MASTER_URL, query);
return result;
}
const getBusinessList=async()=>{
  const query=gql`
  query getBusinessList {
  
    businessLists {
      id
      name
      email
      contactPerson
      category {
        name
      }
      address
      about
      images {
        url
      }
    }
  }
  
  `
  const result=await request(MASTER_URL, query);
return result;
}
const getBusinessListByCategory=async(category)=>{
  const query=gql `
  query getBusinessList {
    businessLists(where: {category: {name: "`+category+`"}}) {
      id
      name
      email
      contactPerson
      category {
        name
      }
      address
      about
      images {
        url
      }
    }
  }
  `
  const result=await request(MASTER_URL, query);
return result;

}
const createBooking = async(data)=>{
  const mutationQuery=gql`
  mutation createBooking {
    createBooking(
      data: {bookingStatus: Booked,
         businessList: {connect: {id: "`+data.businessid+`"}},
         date: "`+data.date+`",
          time: "`+data.time+`",
           userEmail: "`+data.userEmail+`", 
           userName: "`+data.userName+`"}
    ) {
      id
    }
    publishManyBookings
  }
  `
  const result=await request(MASTER_URL, mutationQuery);
  return result;
}
export default{
  getSlider,
  getCategories,
  getBusinessList,
  getBusinessListByCategory,
  createBooking 

}

// https://api-ap-south-1.hygraph.com/v2/clr99ocaj0m6d01waa6mokmzv/master