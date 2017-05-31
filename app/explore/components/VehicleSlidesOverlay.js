import React from 'react';
import PropTypes from 'prop-types';

import * as METRICS from '../../shared/style/metrics';
import * as COLORS from '../../shared/style/colors';

import RoundedButton from '../../shared/components/RoundedButton';
import VehicleIcon from '../../shared/components/VehicleIcon';

const angle = '/static/icons/Icon_ButtonArrow_Blue.svg';
const IconArrowRight = '/static/icons/Icon_ArrowRight.svg';
const IconArrowLeft = '/static/icons/Icon_ArrowLeft.svg';

class VehicleSlidesOverlay extends React.PureComponent {

  static propTypes = {
    lanesLoaded: PropTypes.bool,
    parkingLoaded: PropTypes.bool,
    nextVehicleName: PropTypes.string,
    previousVehicleName: PropTypes.string,
    showScrollUI: PropTypes.bool,
    isScrolling: PropTypes.bool,
    goToNextVehicle: PropTypes.func,
    goToPreviousVehicle: PropTypes.func,
    scrollToTop: PropTypes.func,
    scrollToEnd: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const lanesOrParkingLoaded = this.props.lanesLoaded || this.props.parkingLoaded;

    return (
      <div className="Overlay">
        {this.props.showScrollUI && lanesOrParkingLoaded && 
          <div className="PositionLine" />
        }
        {this.props.nextVehicleName &&
          <button
            className="VehicleButton NextVehicleButton"
            onClick={() => this.props.goToNextVehicle()}
          >
            <VehicleIcon
              className="vehicle-icon"
              vehicle={this.props.nextVehicleName}
              height={60}
              width={60}
            />
            <img alt="icon" src={angle} className="arrow" />
          </button>
        }
        {this.props.previousVehicleName &&
          <button
            className="VehicleButton PrevVehicleButton"
            onClick={() => this.props.goToPreviousVehicle()}>
            <img alt="icon" src={angle} className="arrow" />
            <VehicleIcon
              vehicle={this.props.previousVehicleName}
              height={60}
              width={60}
            />
          </button>
        }
        {!this.props.isScrolling && this.props.showScrollUI &&
          <section className="ButtonsSection">
            <div className="ButtonsSectionInner">
              <div className="ButtonContainer">
                <RoundedButton
                  onClick={() => console.log("TODO")}
                  hidden={!this.props.parkingLoaded}>
                    Show on Map
                </RoundedButton>
              </div>
              <div className="ButtonContainer">
                <RoundedButton
                  onClick={() => console.log("TODO")}
                  hidden={!this.props.lanesLoaded}
                >
                    Show on Map
                </RoundedButton>
              </div>
            </div>
          </section>
        }
        {this.props.showScrollUI && lanesOrParkingLoaded &&
          <footer className="Footer">
            <div className="ButtonGroup">
              <button
                className="ButtonGroupButton ButtonGroupButtonTop"
                onClick={() => this.props.scrollToTop()}>
                <img alt="ScrollIcon" src={IconArrowLeft} />
              </button>
              <div className="ButtonGroupSeparator"></div>
              <button 
                className="ButtonGroupButton ButtonGroupButtonBottom"
                onClick={() => this.props.scrollToEnd()}>
                  <span className="ButtonLabel-scrolltobottom">Scroll to next</span>
                  <img alt="ScrollIcon" src={IconArrowRight} />
              </button>
            </div>
          </footer>
        }
        <style jsx>{`
          .Overlay {
            position: fixed;
            z-index: 300000;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            pointer-events: none;
            will-change: transform;
            transform: translateZ(0);
          }

          .PositionLine {
            position: fixed;
            top: calc(${METRICS.MetricsTopSpace} + 90px);
            height: 7px;
            width: 100%;
            background-color: rgba(255, 104, 25, .2);
          }

          .VehicleButton {
            position: absolute;
            background-color: ${COLORS.ColorWhite};
            padding-left: 15px;
            padding-right: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 120px;
            height: 80px;
            box-shadow: ${COLORS.boxshadow};
            right: 0;
            top: 40vh;
            outline: none;
            pointer-events: all;
            cursor: pointer;
          }

          .VehicleButton :global(.vehicle-icon) {
            opacity: 0.7;
            transition: 300ms opacity;
          }

          .VehicleButton:hover :global(.vehicle-icon) {
            opacity: 1;
            transition: 300ms opacity;
          }

          .PrevVehicleButton {
            right: auto;
            left: 0;
          }

          .PrevVehicleButton img.arrow {
            transform: rotate(180deg);
          }

          .ButtonsSection {
            position: fixed;
            top: 340px;
            width: 100%;
          }

          .ButtonsSectionInner {
            width: ${METRICS.MetricsContentWidth};
            margin: 0 auto;
            display: flex;
            justify-content: space-around;
          }

          .ButtonsSectionInner button {
            background-color: ${COLORS.ColorForegroundOrange};
            pointer-events: all;
            color: #fff;
            cursor: pointer;
          }

          .ButtonContainer {
            display: flex;
            justify-content: center;
            flex-basis: 50%;
            flex-shrink: 0;
          }

          .ButtonGroup {
            display: flex;
            overflow: hidden;
            border-radius: 50px;
            width: 217px;
            height: 50px;
            box-shadow: 0 6px 10px rgba(0,0,0,.08);
            pointer-events: all;
            transform: rotate(90deg);
          }

          .ButtonGroupButton {
            border: none;
            background-color: #fff;
            padding: 15px 10px;
            border: 1px solid #eee;
            border-left: 0;
            border-right: 0;
            outline: none;
            cursor: pointer;
          }

          .ButtonGroupButton:hover {
            background-color: #FDFDFD;
          }

          .ButtonGroupSeparator {
            background-color: ${COLORS.ColorBlueishGray};
            height: 50px;
            width: 2px;
          }

          .ButtonGroupButtonTop {
            border-top:0;
          }

          .ButtonGroupButtonBottom {
            border-bottom:0;
          }

          .ButtonLabel-scrolltobottom {
            font-size: 18px;
          }

          .Footer {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 150px;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            will-change: transform;
            transform: translateZ(0);
          }

        `}</style>
      </div>
    )
  }

}

export default VehicleSlidesOverlay;
