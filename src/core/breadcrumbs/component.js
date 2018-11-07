import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import './component.css';

export const Breadcrumbs = (props) => {
  return (
    <Breadcrumb className="breadcrumb">
        <BreadcrumbItem>
            <NavLink to="/">Home</NavLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
            <NavLink to="/users">Users</NavLink>
        </BreadcrumbItem>
        <BreadcrumbItem active>
            Call List
        </BreadcrumbItem>
    </Breadcrumb>
  );
};