import { request, gql } from 'graphql-request'
const MASTER_URL="https://api-ap-south-1.hygraph.com/v2/clr99ocaj0m6d01waa6mokmzv/master"

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
export default{
    getSlider

}
