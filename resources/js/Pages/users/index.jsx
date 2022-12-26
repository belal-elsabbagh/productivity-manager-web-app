import React from 'react';
import {Link, Head} from '@inertiajs/inertia-react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import UsersTable from "@/Components/Tables/UsersTable";
import {isAdmin} from "@/lib";
import CreateResource from "@/Components/CreateResource";
import UserIndexContent from "@/Components/UserIndexContent";
import PersonnelNav from "@/Components/PersonnelNav";

export default function index(props) {
    const users = props.users.data
    const userType = props.auth.user.user_type_id
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            title={"Users"}
            backHref={'/dashboard'}
        >
            <PersonnelNav active={'users'}/>
            <UserIndexContent
                resource={'user'}
                canCreate={isAdmin(userType)}

            >
                <UsersTable
                    data={users}
                    firstColKey={'name'}
                />
            </UserIndexContent>
        </AuthenticatedLayout>
    );
}
