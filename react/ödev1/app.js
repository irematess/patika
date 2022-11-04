import axios from "axios"


const getUser =async(_id) => {
    const {data : user} = await axios("https://jsonplaceholder.typicode.com/users/"+ _id);
    console.log(user);
};


const getPost = async(_id) => {
    const {data : post} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${_id}`);
    console.log(post); 
};


function getData(_id) {

    try {
        const user = getUser(_id);
        const post = getPost(_id);
    }

    catch (e) {
        return e;
    }

}
export default getData;