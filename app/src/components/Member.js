import React from 'react';

const Member = props => {

    return (
        <div className="member-card">
            <h3>{props.member.name}</h3>
            <h3>{props.member.email}</h3>
            <h3>{props.member.role}</h3>

        </div>
    )
}

export default Member;