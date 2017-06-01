import React from 'react';

const FacebookIcon = '/static/icons/Icon_Social_Facebook.svg';
const TwitterIcon = '/static/icons/Icon_Social_Twitter.svg';

class SocialShareButtons extends React.PureComponent {

  static propTypes = {
    result: React.PropTypes.string,
    suggestion: React.PropTypes.string,
  }

  twitterUrl(result) {
    let text = '';
    switch (result) {
      case 'good':
        text = 'I am a mobility expert 😀';
        break;
      case 'bad':
        text = `I should move to ${this.props.suggestion} 🙃`;
        break;
      default:
        text = 'I am a mobility expert 😀';
        break;
    }
    text += '\n… according to ';
    const website = 'http://mobviz.moovellab.com';

    return `https://twitter.com/intent/tweet?text=${encodeURI(text)}&url=${encodeURI(website)}`;
  }

  facebookUrl(result) {
    let text = '';
    switch (result) {
      case 'good':
        text = 'I am a mobility expert :-)';
        break;
      case 'bad':
        text = `I should move to ${this.props.suggestion} (-:`;
        break;
      default:
        text = 'I am a mobility expert :-)';
        break;
    }
    text += '\n… according to ';
    const website = 'http://mobviz.moovellab.com';

    return `https://www.facebook.com/dialog/share?app_id=224279401377906&display=popup&href=${encodeURI(website)}&quote=${encodeURI(text)}&redirect_uri=http%3A%2F%2Flocalhost%3A3000`;
  }

  render() {
    return (
      <div className="List">
        <a className="Button" href={this.facebookUrl(this.props.result)} target="_blank"><img alt="FacebookIcon" src={FacebookIcon} /></a>
        <a className="Button" href={this.twitterUrl(this.props.result)} target="_blank"><img alt="TwitterIcon" src={TwitterIcon} /></a>
        <style jsx>{`
          .List {
            display: flex;
          }

          .Button {
            list-style: none;
            cursor: pointer;
            padding: 0 5px 0 0;
          }
        `}</style>
      </div>
    );
  }
}

export default SocialShareButtons;