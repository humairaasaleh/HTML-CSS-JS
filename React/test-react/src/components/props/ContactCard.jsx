import ContactCardSubChild from "./ContactCardSubChild";

const ContactCard = ({arrayCard}) => {
    console.log(arrayCard);
    return (  
        <div>
            {arrayCard.map((contact, i)=>{
                console.log(contact);
                return<ContactCardSubChild key={i} contact={contact}/>
            })}
        </div>
    );
}
 
export default ContactCard;