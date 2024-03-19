import Accordion from 'react-bootstrap/Accordion';
import NavBar from './NavBar';
import Footer from './Footer';

const Faq = () => {
  return (
    <div>
      <NavBar/>
      <section>
        <div>
        <center className='mt-5'>
      <p>&nbsp;</p>
        <hr className='mt-5'/>
        <h4 className='mb-5'>Frequently Asked Questions </h4>
      </center>
        </div>
        <div className="container mb-5">
        <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Do you have online booking? Can we pay with credit cards?</Accordion.Header>
    <Accordion.Body>
      - Our apologies but we cannot do online booking or accept credit cards at this time due to connectivity issues within the Bretania area. We are exploring ways to solve this problem and will offer this service as soon as possible.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Can I make a reservation on the phone?</Accordion.Header>
    <Accordion.Body>
      - Yes, you can and your reservation will be duly noted. But it will be considered temporary and can be cancelled at any time if another guest makes a confirmed reservation for the same villa or villas for the same date.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>What happens when I cannot check in on the date of my confirmed reservation due to travel schedule changes or any other reason? Will there be charges for cancelled bookings?</Accordion.Header>
    <Accordion.Body>
      - If you contact our front desk at least 7 days prior to your check-in date to either cancel or reschedule your confirmed reservation then you can get a full refund of your confirmation deposit and will not be assessed additional charges for booking changes. If the cancellation of the confirmed booking is within 4 to 6 days prior to the check-in date then 10 percent of the confirmation deposit will be deducted. A 20 percent penalty will be deducted for cancellations made 3 to 2 days prior to check-in. Finally, 30 percent of the confirmation deposit will be forfeited for cancellations occurring within 24 hours prior to the check-in date.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>What are your amenities? What do you offer your guests?</Accordion.Header>
    <Accordion.Body>
      -Our resort aims to give our guests the best Resort vacation experience at the most affordable prices possible. Please check out our website at www.seamless.com for detailed information about the resort and its amenities and services. You can also browse or message us through our Facebook page or through email at seamless@gmail.com.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>Can we cook our own food in the villas?</Accordion.Header>
    <Accordion.Body>
      - Apologies but our villas are not equipped for cooking. Be assured that our restaurant will provide meals and snacks at very affordable prices. Aside from the standard menu, you can order fresh seafood cooked the way you want it.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="5">
    <Accordion.Header>Can we bring food from the outside and have it cooked at the restaurant?</Accordion.Header>
    <Accordion.Body>
      - Yes, you can. You can coordinate with our restaurant kitchen staff and they will prepare and cook your food the way they want it for a very minimal fee.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="6">
    <Accordion.Header>Do you have corkage fees for cooked food brought from outside the resort?</Accordion.Header>
    <Accordion.Body>
      - There is a very minimal corkage free for cooked food brought in from the outside. You can consult with our front desk or restaurant staff for such concerns.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="7">
    <Accordion.Header>Can we cook or grill food outside the villas or on the beach? Can we make a bonfire within the beach area at night?</Accordion.Header>
    <Accordion.Body>
      - Sorry, the cooking or grilling of food on the resort grounds or within the beach area is not allowed due to fire safety concerns. Bonfires are also generally prohibited for similar reasons. You should consult with our resort staff if you plan to have these type of activities during your stay.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="8">
    <Accordion.Header>How long is the island hopping tour? How many many hours? How many islands are visited?</Accordion.Header>
    <Accordion.Body>
      - The standard boat tour will take three to four hours and will cover four of the most popular islands and islets. The tour can however be customized the way you want it by coordinating with the front desk upon reservation or check-in.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="9">
    <Accordion.Header>Do you have free parking space?</Accordion.Header>
    <Accordion.Body>
      - Yes, we do provide free parking for all our resort guests and visitors.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="10">
    <Accordion.Header>Do you have water rides, snorkeling equipment, kayaks and other water sports facilities?</Accordion.Header>
    <Accordion.Body>
      - While our resort does not yet offer such services, the Bretania tourism area does have watercraft rides and other water sports activities on one of the islands included in the island hopping tour. You can ask for more information from our front desk staff regarding the specific rides and water sports attractions available on the tour.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="11">
    <Accordion.Header>Can we bring a tent and set it up on the beach or resort grounds?</Accordion.Header>
    <Accordion.Body>
      - As a general rule our resort does not allow the use of tents because of space limitations. For special group activities and other special occasions requiring temporary or collapsible structures, you can coordinate your requests with our front desk.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="12">
    <Accordion.Header>Do you have free WIFI?</Accordion.Header>
    <Accordion.Body>
      - Yes, all rooms can access free WIFI
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Faq;
