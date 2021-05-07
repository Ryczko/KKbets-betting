import { StyledLeftInfoView } from './LeftInfoView.css';

function LeftInfoView(): JSX.Element {
    return (
        <StyledLeftInfoView>
            <h2>Information</h2>
            <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum, lectus vitae congue malesuada, augue
                eros facilisis lorem, suscipit eleifend ante leo a orci. Sed nisl leo, congue ut urna finibus, finibus
                ornare nibh. In consequat magna quis lacinia mollis.
            </p>
            <h4>
                Support our project:{' '}
                <a href="#" target="_blank">
                    <i className="icon-paypal" />
                </a>
            </h4>

            <div className="bottom">
                <h5>
                    App developer:
                    <a href="https://www.linkedin.com/in/konrad-ryczko-2298b7188/" target="_blank">
                        <i className="icon-github-circled" />
                    </a>
                    <a href="https://github.com/Ryczko" target="_blank">
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
