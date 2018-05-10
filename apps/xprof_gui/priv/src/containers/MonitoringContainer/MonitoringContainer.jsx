import React from 'react';
import { connect } from 'react-redux';
import { Monitoring } from '../../components/monitoring';
import {
  getFunctionsData,
  getMonitoredFunctions,
  stopMonitoringFunction,
  showCallees,
  hideCallees,
  expandGraphPanel,
  shrinkGraphPanel,
  calleeClick,
} from '../../actions';
import {
  getFunctionData,
  getFunctionCallees,
  getFunctionCalleesVisibility,
  getFunctionGraphVisibility,
} from '../../selectors';

const MonitoringContainer = props => <Monitoring {...props} />;

const mapStateToProps = (state, ownProps) => ({
  monitored: ownProps.monitored,
  data: getFunctionData(state, ownProps.monitored.query),
  callees: getFunctionCallees(state, ownProps.monitored.query),
  calleesVisibility: getFunctionCalleesVisibility(
    state,
    ownProps.monitored.query,
  ),
  panelVisibility: getFunctionGraphVisibility(state, ownProps.monitored.query),
});

const mapDispatchToProps = {
  getMonitoredFunctions,
  getFunctionsData,
  stopMonitoringFunction,
  showCallees,
  hideCallees,
  expandGraphPanel,
  shrinkGraphPanel,
  calleeClick,
};

const con = connect(mapStateToProps, mapDispatchToProps)(MonitoringContainer);
export default con;