import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="feedback-card-container">
    <div className="feedback-card">
      <img src={quotes} alt="double_quotes" className="w-[42px] h-[27px] object-contain" />
      <p className="feedback-content">{content}</p>
      <div className="feedback-info">
        <img src={img} alt={name} className="feedback-img" />
        <div className="feedback-details">
          <h4 className="feedback-name">{name}</h4>
          <p className="feedback-title">{title}</p>
        </div>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
