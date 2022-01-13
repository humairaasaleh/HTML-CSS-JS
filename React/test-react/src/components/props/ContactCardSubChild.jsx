const ContactCardSubChild = ({contact}) => {
    const {fname, phone, image,quote, address}=contact;
    return (
        <div>
        
        <h2>Name: {fname}</h2>
        <h3>Phone: {phone}</h3>
        <h3>{<img src={image} alt="cat"  width="250" height="250"/>}</h3>
        <h3>Quote: {quote}</h3>
        <h3>Address: {address}</h3>
        </div>
      );
}
 
export default ContactCardSubChild;