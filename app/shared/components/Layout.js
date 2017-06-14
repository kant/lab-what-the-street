import React, { Component } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import * as METRICS from '../style/metrics';
import * as COLORS from '../style/colors';

class Layout extends Component {

  static propTypes = {
     title: PropTypes.string
  }

  static defaultProps = {
    title: 'What the Street!?'
  }

  componentDidMount() {
    require('smoothscroll-polyfill').polyfill();
  }

  render() {
    return (
      <div>
        <Head>
          <title>What the Street!? - moovel lab</title>
          <meta charset='utf-8' />
          <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no" />
          <meta name="description" content="Who owns the city? Explore the distribution of mobility space amongst urban traffic. Discover every parking lot or street of 23 metropolises." />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/10up-sanitize.css/4.1.0/sanitize.min.css"/>
          <link rel="apple-touch-icon" href="/static/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" href="/static/favicon/favicon.png" />
          <meta property="og:title" content="What the Street!? - moovel lab" />
          <meta property="og:url" content="http://whatthestreet.moovellab.com" />
          <meta property="og:image" content="http://whatthestreet.moovellab.com/static/images/wts-meta@2x.png" />
          <meta property="og:description" content="Who owns the city? Explore the distribution of mobility space amongst urban traffic. Discover every parking lot or street of 23 metropolises." />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="moovel lab" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@moovelLab" />
          <meta name="twitter:title" content="What the Street!? - moovel lab" />
          <meta name="twitter:description" content="Who owns the city? Explore the distribution of mobility space amongst urban traffic. Discover every parking lot or street of 23 metropolises." />
          <meta name="twitter:image" content="http://whatthestreet.moovellab.com/static/images/wts-meta@2x.png" />
        </Head>
        {this.props.children}
        <style jsx global>{`
          @font-face {
            font-family: 'LarsseitMedium';
            src: url('/static/fonts/Larsseit/Larsseit-Medium.eot');
            src: url('/static/fonts/Larsseit/Larsseit-Medium.ttf');
            src: url('/static/fonts/Larsseit/Larsseit-Medium.woff');
            src: url('/static/fonts/Larsseit/Larsseit-Medium.woff2');
          }

            @font-face {
            font-family: 'LarsseitLight';
            src: url('/static/fonts/Larsseit/Larsseit-Light.eot');
            src: url('/static/fonts/Larsseit/Larsseit-Light.woff');
            src: url('/static/fonts/Larsseit/Larsseit-Light.woff2');
          }

          @font-face {
            font-family: 'Sign-Painter';
            src: url('/static/fonts/Sign_Painter_House_Brush/SignPainter_HouseBrush.ttf');
          }

          @font-face {
            font-family: 'Circular';
            src: url('/static/fonts/Circular/CircularStd-Medium.otf');
          }

          html, body {
            min-height: 100%;
            width: 100%;
          }

          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            outline: none;
          }


          body {
            font-family: 'Larsseit', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            color: ${COLORS.ColorForegroundText};
            background-color: #fafafa;
            line-height: 1;
          }

          body.fontLoaded {
            font-family: 'Larsseit', 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          }

          h1 {
            margin: 0;
            line-height: 1em;
            font-size: 36px;
          }

          h2 {
            font-size: 21px;
            font-weight: 200;
          }

          h3 {
            margin-top: 0;
          }
        `}</style>
      </div>
    )
  }
}

export default Layout;
