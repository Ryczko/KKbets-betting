import { StyledLeftInfoView } from './LeftInfoView.css';

function LeftInfoView(): JSX.Element {
  return (
    <StyledLeftInfoView>
      <h2>Information</h2>
      <p className="description">
        KKbets is a website that allows you to bet on sports events using virtual currency. Players compete against each
        other by collecting as many points as possible and gaining achievements. <br />
        <br />
        Did you lose all points? Do not worry! You can claim a free bonus once a day.
      </p>

      <div className="bottom">
        <h5>
          App developer:
          <a href="https://github.com/Ryczko" target="_blank">
            <i className="icon-github-circled" />
          </a>
          <a href="https://www.linkedin.com/in/konrad-ryczko-2298b7188/" target="_blank">
            <i className="icon-linkedin-rect" />
          </a>
        </h5>

        <h6>
          All rights reserved <i className="icon-copyright" />
        </h6>
      </div>
    </StyledLeftInfoView>
  );
}

export default LeftInfoView;
