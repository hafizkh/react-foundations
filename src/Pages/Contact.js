import React from 'react'

const Contact = () => {

    return (
        <div className="form-container">
            <h2 className="form-heading">Contact Us</h2>

            <form >
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="6"
                    ></textarea>
                </div>

                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Contact
