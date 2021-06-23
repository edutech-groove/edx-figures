import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import HeaderAreaLayout from 'base/components/layout/HeaderAreaLayout';
import HeaderContentMaus from 'base/components/header-views/header-content-maus/HeaderContentMaus';
import BaseStatCard from 'base/components/stat-cards/BaseStatCard';

class DashboardContent extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <div className="ef--layout-root">
        <HeaderAreaLayout>
          <HeaderContentMaus
            showHistoryButton
          />
        </HeaderAreaLayout>
        <div className='container base-grid-layout dashboard-content'>
          <div className="stat-card-grid">
            <BaseStatCard
              mainValue={this.props.generalData.getIn(['registeredUsers', 'current_month'], 0)}
              valueHistory={this.props.generalData.getIn(['registeredUsers', 'history'], [])}
              cardTitle='Registered learners'
            />
            <BaseStatCard
              mainValue={this.props.generalData.getIn(['newUsers', 'current_month'], 0)}
              valueHistory={this.props.generalData.getIn(['newUsers', 'history'], [])}
              cardTitle='New learners'
            />
            <BaseStatCard
              mainValue={this.props.generalData.getIn(['courseEnrollments', 'current_month'], 0)}
              valueHistory={this.props.generalData.getIn(['courseEnrollments', 'history'], [])}
              cardTitle='Course enrolments'
            />
            <BaseStatCard
              mainValue={this.props.generalData.getIn(['courseCompletions', 'current_month'], 0)}
              valueHistory={this.props.generalData.getIn(['courseCompletions', 'history'], [])}
              cardTitle='Course completions'
            />
          </div>
        </div>
        <div className='container functionality-callout'>
          <h3>Quickly access a data for a specific course using the <strong>"Jump to a course"</strong> widget on top, or <strong>Browse all the courses</strong> on the following screen:</h3>
          <NavLink
            to="/figures/courses"
            className='functionality-callout-cta'
          >
            Browse Courses
          </NavLink>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  generalData: Immutable.fromJS(state.generalData),
})

export default connect(
  mapStateToProps,
)(DashboardContent)
