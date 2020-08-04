import React, { useState } from "react";
import UserFormContainer from "../../container/UserFormContainer";

export const UserAddForm = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="row">
            <button
                className="waves-effect waves-light btn"
                type="button"
                onClick={() => setShow(true)}
                disabled={show}
            >
                Add User
            </button>
            <button
                className="waves-effect waves-light btn"
                type="button"
                onClick={() => setShow(false)}
                disabled={!show}
            >
                Cancel
            </button>
            {show && (
                <UserFormContainer
                    closeForm={() => {
                        setShow(false);
                    }}
                />
            )}
        </div>
    );
};
