import React from 'react';

const EditExpensePage = ({match}) => (
    <div>
        This is from my edit expanse page ID: {match.params.id}
    </div>
);

export default EditExpensePage;