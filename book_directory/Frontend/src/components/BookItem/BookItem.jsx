import React from "react";
import "./BookItem.less";
import { Link } from "react-router-dom";

const BookItem = ({ book }) => {
  const [isHidden, setIsHidden] = React.useState(false);

  const _onMouseEnter = () => setIsHidden(true);
  const _onMouseLeave = () => setIsHidden(false);
  return (
    <div
      className={"book_block"}
      key={book.key}
      onMouseEnter={_onMouseEnter}
      onMouseLeave={_onMouseLeave}
    >
      <div className="__inner_block">
        <img src={book.imageLink} />
        <span className="__author">{book.author}</span>
        <span className="__year">{book.year}</span>
      </div>
      <div className={`__overlay ${!isHidden ? "__isHidden" : ""}`}>
        <div className="__topNav">
          <span className="__country">{book.country}</span>
          <span className="__lang">{book.language}</span>
        </div>
        <div className="__bottomNav">
          <span className="__Link">
            <Link to={book.link} title="Go To">
              Visit
              <i
                class="fas fa-external-link-alt"
                style={{ fontSize: "12px" }}
              ></i>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
