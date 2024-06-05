import { Collapse } from "antd";
import './Faq.scss'
const text = `
Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that.
`;
const items = [
  {
    key: "1",
    label: "How does it create content?",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "Is the content original?",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "How to write long-form blogs?",
    children: <p>{text}</p>,
  },
  {
    key: "4",
    label: "How to write long-form blogs?",
    children: <p>{text}</p>,
  },
  {
    key: "5",
    label: "How to write long-form blogs?",
    children: <p>{text}</p>,
  },
];
function Faq() {
  return (
    <div className="Faq-section">
      <div className="container max-w-[1296px]">
        <div className="title-top">
          <h6>FAQ</h6>
          <div className="line"></div>
        </div>
        <div className="title">
          Check The Question Section To Get{" "}
          <span>Resources, FAQs, & Guides</span>
        </div>
        <Collapse className="mt-[50px]" accordion items={items} />
      </div>
    </div>
  );
}
export default Faq;
