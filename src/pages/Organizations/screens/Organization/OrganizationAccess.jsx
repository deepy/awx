import React from 'react';
import OrganizationAccessList from '../../components/OrganizationAccessList';

class OrganizationAccess extends React.Component {
  constructor (props) {
    super(props);

    this.getOrgAccessList = this.getOrgAccessList.bind(this);
    this.removeRole = this.removeRole.bind(this);
  }

  getOrgAccessList (id, params) {
    const { api } = this.props;
    return api.getOrganizationAccessList(id, params);
  }

  removeRole (url, id) {
    const { api } = this.props;
    return api.disassociate(url, id);
  }

  render () {
    const {
      location,
      match,
      history,
    } = this.props;

    return (
      <OrganizationAccessList
        getAccessList={this.getOrgAccessList}
        removeRole={this.removeRole}
        match={match}
        location={location}
        history={history}
      />
    );
  }
}

export default OrganizationAccess;
