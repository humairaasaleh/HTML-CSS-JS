const ContactCard = ({name,phone,image,quote,address}) => {
    return (  
        <div>
            <h2>Name of contact:{name}</h2>
            <h2>Phone number:{phone}</h2>
            <img src={image} alt="cat"  width="250" height="250"/>
            <h2>a quote: {quote}</h2>
            <h2>address: {address}</h2>
        </div>
    );
}
 
export default ContactCard;