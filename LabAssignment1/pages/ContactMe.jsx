import {useState} from 'react'



    


export default function ContactMe(){
    
    const processSubmit = (e) =>  {
        e.preventDefault();
        //console.log('You clicked submit.');
        var msgSubject = document.getElementById("txtSubject").value;
        var firstName = document.getElementById("txtFirstName").value;
        var lastName = document.getElementById("txtLastName").value;
        var contactNo = document.getElementById("txtContactNo").value;
        var email = document.getElementById("txtEmail").value;
        var message = document.getElementById("txtMessage").value;
        var alertMsg = "Below message detail has been sent.\n"
        alertMsg += "Subject: " + msgSubject + "\n";
        alertMsg += "FirstName: " + firstName + "\n";
        alertMsg += "LastName: " + lastName + "\n";
        alertMsg += "ContactNo: " + contactNo + "\n";
        alertMsg += "Email: " + email + "\n";
        alertMsg += "Message: " + message + "\n";
        
        alert(alertMsg);
    
        location.href = "/";
    }
    
    return(
        <>
            <script>
            
            </script>
            <h2>Contact Me</h2>
            {/* contact me method list */}
            <ul className="ulContactUs">
                <li >
                    <div>
                        <span><img className="contactmeIcon" src="../images/phone-call.png" /></span>
                        <span>By Phone</span>
                        <p>+1 283782328723</p>
                    </div>
                </li>

                <li>
                    <div>
                        <span><img className="contactmeIcon" src="../images/envelope.png" /></span>
                        <span>By Email</span>
                        <p>xx@gmail.com</p>
                    </div>
                </li>

                <li>
                    <div>
                        <span><img className="contactmeIcon" src="../images/whatsapp.png" /></span>
                        <span>By WhatsApp</span>
                        <p>+1 283782328723</p>
                    </div>
                </li>
            </ul>

            <br />

            {/* sending message form */}

            <h3>Or send message to me by below form</h3>
            <form method="post" onSubmit={processSubmit}>
                <table cellPadding="5" cellSpacing="5">
                    <tbody>
                        <tr>
                            <td>Subject:</td>
                            <td colSpan="3"><input type="text" className="messageSubject" id="txtSubject" name="txtSubject" required="required" ></input></td>
                        </tr>
                        <tr>
                            <td>First Name:</td>
                            <td><input type="text" className="inputTxt" id="txtFirstName" name="txtFirstName" required="required"></input></td>
                            <td>Last Name:</td>
                            <td><input type="text" className="inputTxt" id="txtLastName" name="txtLastName" required="required"></input></td>
                        </tr>
                        <tr>
                            <td>Contact no.:</td>
                            <td><input type="text" className="inputTxt" id="txtContactNo" name="txtContactNo"  required="required"></input></td>
                            <td>Email Address:</td>
                            <td><input type="text" className="inputTxt" id="txtEmail" name="txtEmail" required="required"></input></td>
                        </tr>
                        
                        <tr>
                            <td>Message:</td>
                            <td colSpan="3"><textarea className="messageText" id="txtMessage" name="txtMessage" rows="10" columns="500" required="required"></textarea></td>
                        </tr>
                        <tr>
                            <td colSpan="4"><input className='btnSubmit' type="submit" id="btnSubmit" value="Send" /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    );
} 