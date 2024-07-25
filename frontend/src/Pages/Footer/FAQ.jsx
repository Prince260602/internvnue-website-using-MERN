import Card from "./Card";
import "../../css/footer/faq.css";

function FAQ() {
  return (
    <>
      <header className="text-center text-xl md:text-2xl lg:text-3xl 2xl:text-3xl   my-8 ">
        Frequently Asked Questions
      </header>
      <div className="wrapper mx-auto px-4 sm:px-6 lg:px-8">
        <div className="ins grid gap-1 sm:grid-cols-1 lg:grid-cols-2 sm:mx-9 text-lg text-gray-600">
          <Card
            que="Will I be charged for a test invite that the candidate did not attempt?"
            ans="No, you only get charged for the tests that the candidates have submitted."
          />
          <Card
            que="Can I add more team members than my limit on the plan?"
            ans="Unfortunately, you can only add up to the limit of users in your plan."
          />
          <Card
            que="When is an interview deducted from my quota?"
            ans="Your interview only gets deducted when both candidate and interviewer have spent more than 15 minutes in a call."
          />
          <Card
            que="Why should I buy a paid plan?"
            ans="Our free plans have a limit of max 3 interviews/assignments per day. In addition to that you have unlimited access to interview playback and history that you can access in our paid plans. To see a detailed comparison, tap here."
          />
          <Card
            que="What are my payment options?"
            ans="We currently accept debit and credit cards but can accept alternative payment methods like ACH for Business or Enterprise plans if you email us at support@intervue.io"
          />
          <Card
            que="Can we take concurrent interviews on one account?"
            ans="Yes, Absolutely!"
          />
          <Card
            que="What happens when I add my team members?"
            ans="Intervue thrives with multiple team members. You can collaborate on interviews, assignments, question banks and outcomes with your team mates. Give it a try."
          />
          <Card
            que="How is interview on Intervue different than zoom, google meets and teams?"
            ans="When you interview on Intervue you and the candidate both can be on the same code environment while being on a high quality video call. You also have a quick access to question bank, notes and candidate profile. All the events from the interview are collated in a quick playback that can be shared with anyone from your hiring team."
          />
          <Card
            que="Can we take concurrent interviews on one account?"
            ans="Yes they both belong to the same quota."
          />
        </div>
      </div>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
