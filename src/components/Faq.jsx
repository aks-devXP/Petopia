import React from 'react'

const Faq = () => {

    const handleToggle = (e) => {
        
        const question = e.target 
        const answer = e.target.nextSibling 

        if(question.classList.contains('faq-accordion-question-button-active')) {
            question.classList.remove('faq-accordion-question-button-active')
            answer.classList.remove('faq-accordion-answer-active')
        } else {
            // // reset 
            const openQuestions = document.querySelectorAll('.faq-accordion-answer-active')
            const openBtn = document.querySelectorAll('.faq-accordion-question-button-active')
            openQuestions?.forEach(item => item.classList.remove('faq-accordion-answer-active'))      
            openBtn?.forEach(btn => btn.classList.remove('faq-accordion-question-button-active'))

            question.classList.add('faq-accordion-question-button-active')
            answer.classList.toggle('faq-accordion-answer-active')
        }
    }

    const data = [
        {
            id: 1,
            question: "Where are you Vet Clinics Located?",
            answer: "We have 25+ pet clinics spread across Gurugram, Delhi, Noida, Ghaziabad, Bengaluru, Mumbai & Pune.",
        },
        {
            id: 2,
            question: "Do all the clinics provide surgery?",
            answer: "Majority of clinincs do provide vaccinations of all kinds for dogs and cats at the veterinary clinic; However do consult the specific clinic before visiting.",
        },
        {
            id: 3,
            question: " My pet is lethargic. Should I visit a pet clinic near me?",
            answer: "Lethargy is a serious symptom which is common for almost all diseases in pets. You should bring your pet in for a vet checkup to the pet clinic for proper treatment.",
        },
        {
            id: 4,
            question: "What is the vets' experience at Vetic Vet Clinic?",
            answer: "We have a team of multi-speciality vets at each vet clinic. The team has a cumulative experience of over 150 years in veterinary sciences.",
        },
        {
            id: 5,
            question: "Can I walk in for a consultation at a Vetic Vet Clinic?",
            answer: "Yes, you can walk in for consultations. However, we recommend prior booking to avoid unnecessary waiting time and queues.",
        },
    ]

    return (
            <>
            <div className='faq-accordion mt-5'>
               <div className="faq-accordion-content">
                   <h1 className="faq-accordion-title">Frequently Asked Questions (FAQs)</h1>
                    {data.map((item)=>(
                   <div className="faq-accordion-question" key={item.id}>
                        <button className="faq-accordion-question-button" 
                        onClick={handleToggle}> {item.question}
                        </button>
                        <div className="faq-accordion-answer">
                            <p> {item.answer}</p>
                        </div>
                   </div>
                    ))}
               </div>
           </div>
            
        </>
    )
}

export default Faq