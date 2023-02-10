import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {isAdmin} from '@/lib';
import ProjectIndexFilter from '@/Components/IndexContent/IndexFilters/ProjectIndexFilter';
import IndexContent from '@/Components/IndexContent';
import Table from '@/Components/Outputs/Table';
import {ProjectIndexTableRowCells} from '@/lib/factories/TableFactories';
import {v4} from 'uuid';

export default function Index(props) {
  const projects = props.projects.data;
  const regions = projects.map((i) => {
    return {id: v4(), name: i.region};
  });
  const userType = props.auth.user.user_type_id;
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      title={'Projects'}
      backHref={'/dashboard'}
    >
      <IndexContent
        indexQuery={
          <ProjectIndexFilter regions={regions} skills={props.skills} />
        }
        resource={'project'}
        canCreate={isAdmin(userType)}
      >
        <Table
          data={projects}
          getRowCells={ProjectIndexTableRowCells}
          headers={['Name', 'Leader', 'Show']}
        />
      </IndexContent>
    </AuthenticatedLayout>
  );
}
