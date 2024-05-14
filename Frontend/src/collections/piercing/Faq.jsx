import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import picture from "../../assets/images/piercing/FULL.webp"


const FAQs = () => {
  const faqs = [
    { question: 'DOES EAR PIERCING HURT?', answer: 'No. Our Studex ear piercing system has been carefully designed to pierce ears virtually pain free. When performed properly, most people feel little or no discomfort.' },
    { question: 'DO I NEED TO CONSENT TO HAVE MY EARS PIERCED?', answer: 'As a general rule, if you are under the age of 16 years old, you will need your parent or legal guardian present with you to consent for you to have your ears pierced. That age consent may differ depending on what territory or country you live in. Please consult your nearest Aura store for further information. Make sure you bring a form of identification with you to verify your age such as a driver’s license, school identification, birth certificate or passport.' },
    { question: 'DO I NEED TO BOOK IN AN APPOINTMENT?', answer: 'No need to book. Just walk in.' },
    { question: 'HOW MUCH DOES IT COST TO HAVE MY EARS PIERCED?', answer: 'Aura offers a FREE Ear and Nose Piercing Service that includes FREE aftercare solution with the purchase of your Studex Piercing Studs. The prices vary in each country. Nose piercing is only available to people 16 years and over. We also offer children over the ages of 3 years old a free Aura Teddy Bear (while stocks last) and certificate to make their ear piercing experience extra special.' },
    { question: 'WHERE DO YOU PIERCE ON THE EAR?', answer: 'The Studex System 75 can be used on the ear lobe and upper flat cartilage area only. Piercings will depend on each individual and suitability to pierce in the desired location. This will be discussed as part of your consultation with your Piercing Stylist.' },
    { question: 'WHERE WILL I BE PIERCED IN STORE?', answer: 'We have a designated piercing station that is not in a room in our Aura stores. This ensures that you are in a comfortable, friendly and trusted environment.' },
    { question:'ARE THE EARING USED HYPOALLERGENIC?', anwer:'Some people are allergic to nickel, the EU nickel directive regulates how much nickel may be released onto the skin per week. For earrings, these are a maximum of 0.2 micrograms per square centremeter per week (ie. 0.2 millionth of a gram). All Studex studs and earrings fall well below this allowable value and thus nickel safe and allergy free. If fact, all Studex studs and hoops are hypoallergenic, nickel safe, lead-, codium- and cobalt free.'},
  { question:'WHAT TYPE OF GLOVES ARE USED BY THE PIERCER?', anwer:'We understand that some people may be allergic to latex or have sensitive skin. At Aura we use Nitrile gloves which have the lowest allergy rate of any glove material on the market.'},
  {question:'WHAT TYPES OF JEWELLERY CAN I CHOOSE?', anwer:'All Studex jewellery for piercing is hypoallergenic and has been designed for the most sensitive skin as well as being fully compliant with the EU Nickel directive. Importantly each piece of jewellery is pre-sterlised and packaged to allow the piercer to load the earring or stud with no contact, thus guaranteeing the safety. System 75 offers you a wonderful choice of 24 Carat Gold Plate and surgical grade of Stainless Steel earrings. Visit your nearest Aura store to see the full range on offer. We understand that some people may be allergic to latex or have sensitive skin. At Aura we use Nitrile gloves which have the lowest allergy rate of any glove material on the market.'},
  {question:'IS THE PIERCING STATION CLEAN AND HAZARD FREE', anwer:'Yes! All of our Aura Team Members are trained to the highest standards in ear piercing and infection control, to ensure compliance with Infection Control legislation and guidelines around the world.'},
  {question:'CAN I BE PIERCED WITH 2 EAR PIERCERS AT THE SAME TIME?', anwer:'Yes! You sure can. If you would like to ensure 2 piercers are available at a certain time, please contact your nearest Aura store. To get the contact details, please search for your nearest location using our store finder.'},
  {question:'CAN I GET MY EARS PIERCED IF I AM PREGNANT?', anwer:'Unfortunately, no. The main risk of piercing any part of the body during pregnancy is infection. The immune system is not as strong during pregnancy, so infections can develop much easier.'},
  {question:'WHY DO YOU USE THE WORD "DEVICE" IS NOT IT A PIERCING GUN', anwer:'No. There is a big difference between our piercing device and a piercing gun. The Studex System 75 we use is gentle and quiet. Piercing guns are spring-loaded and LOUD! Piercing guns use their spring-loaded power to “shoot” the piercing earring through the earlobe or cartilage. The device we use at Aura uses hand-pressure to pierce the ear quickly and accurately in one smooth, quiet motion.',},
  {question:'CAN I USE STUDEX EAR PIERCING STUDS FOR EVERYDAY USE?',answer:'Yes! Many people with sensitive ears use the Studex sterilized studs for everyday use. However please note we also have premium Aura earrings in store that we recommend that you use in your ear for every day wear such as our Sterling Silver, Gold plated ranges once your new piercings heal.'},
  {question:'HOW LONG DOES IT TAKE FOR AN EAR PIERCING TO HEAL?',answer:'Yes! Many people with sensitive ears use the Studex sterilized studs for everyday use. However please note we also have premium Aura earrings in store that we recommend that you use in your ear for every day wear such as our Sterling Silver, Gold plated ranges once your new piercings heal.'},
  {question:'CAN I HAVE MY EAR PIERCED IF I AM ON ANY MEDICATION?',answer:'If you are on blood thinning medication, please see your doctor for advice.'},
  {question:'WHEN CAN I STOP CLEANING MY EAR PIERCING?',answer:'You must follow the aftercare guidelines for the entire duration of the healing process. Ear lobes take 6-8 weeks to heal and cartilage takes 12 weeks to heal. Even if your new piercings feel like they have healed, please continue the aftercare process that Aura have provided you with.'},
  {question:'WHAT ARE THE CHANCES OF INFECTION?',answer:'Very low, but if you do not follow the strict aftercare instructions, you will run the risk of infection.'},
  {question:'MY NEWLY-PIERCED EARS ARE PAINFUL AND RED. WHAT SHOULD I DO?',answer:'If your ears are painful and red, please seek medical attention immediately. This means you may have an infection and require help from your doctor.'},
  {question:'IS IT OKAY TO CHANGE MY EARINGS OR TAKE THEM OUT DURING THE HEALING PROCESS?',answer:'No. Your new piercings need the entire recommended time to heal properly. You will run the risk of getting an infection if you removed the earrings before the recommended healing period.'},
  {question:'WHAT TRAINING TO AURA PIERCING STYLIST UNDERGO?',answer:'The Aura Piercing training is derived from the Studex Piercing training. We have implement very thorough Aura piercing training that contains several E-Learning modules, Global Piercing processes, How to Create a Clean & Safe Piercing Environment followed by in depth training with our Piercing Trainers. We do not pass any Aura Team Members in the Piercing training unless we are 100% confident that they are ready to pierce customers in our stores.'},
  {question:'WHAT QUALIFICATIONS ARE REQUIRED FOR EAR PIERCINGS?',answer:'All Aura Piercing Stylists have been certified and undergo the Aura Piercing training. Globally there is no official qualifications for ear piercing on the ear lobe or cartilage area. We do not pass any Aura Team Members in the Piercing training unless we feel 100% confident that they are ready to pierce customers in our stores.'},
  {question:'WHEN CAN I START TO WAER Aura JEWELLERY IN NEW PIERCING?',answer:'You can change your earrings to Aura earrings once your new piercings have fully healed as per our healing guidelines. 6-8 weeks for ear lobes and 12 weeks for cartilage piercings. We recommend always wear premium product in your ears when sleeping such as Stainless Steel, Sterling Silver or Gold Plated Ranges.'},
  {question:'WHAT TO DO IF I AM CONCERNED ABOUT MY PIERCING?',answer:'If you have any questions please contact our Customer Support Team via email info@Aura.com and a member of our Customer Support Team will be in contact with you. If you are experiencing pain or redness, please see your doctor straight away.'},
];
  const [expanded, setExpanded] = useState(Array(faqs.length).fill(false));

  const toggleQuestion = (index) => {
    setExpanded((prevExpanded) => {
      const newState = [...prevExpanded];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (<>
  <img src={picture} alt="picture" />
 
    <div className="mx-auto w-3/5  px-2 py-8">
    <p className='py-8'>We're here to answer any questions you have about piercing! Please see our FAQs below, or contact our Customer Care team directly at info@Aura.com</p>
      {/* <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1> */}
      {faqs.map((faq, index) => (
        <div key={index} className="mb-2 border-b border-gray-300 py-2">
          <h2 className="flex items-center justify-between font-bold">
            <span>{faq.question}</span>
            <button onClick={() => toggleQuestion(index)} className="text-gray-600 focus:outline-none">
              <FontAwesomeIcon icon={expanded[index] ? faChevronUp : faChevronDown} />
            </button>
          </h2>
          {expanded[index] && <p className="mt-1">{faq.answer}</p>}
        </div>
      ))}
    </div>
  </>
    
  );
};

export default FAQs;