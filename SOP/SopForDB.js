import React,{useRef} from 'react';
import {render} from "react-dom";
import {useReactToPrint} from 'react-to-print';
import './SOPStyle.css';


class ComponentToPrint extends React.Component {
    
    render(){
        //const JoiningLetter = ({ date, toAddress }) => {
        return(
<div className='Content' >
    <div style={{ textAlign: 'left', padding: '50px' }}>
    <h3 >SOP about Database Management</h3>
    <p className='Heading'>Purpose</p>
    <p className='Content'>The purpose of this SOP is to establish guidelines for the management of databases within Your Bank (YB). Effective database management is essential to maintain data accuracy, availability, and confidentiality.
</p>
<p className='Heading'>Scope</p>
<p className='Content'>This SOP applies to all YB employees and contractors responsible for managing YB's databases.</p>
<p className='Heading'>Responsibilities</p>
<li className='Content'>IT Department: The IT department is responsible for ensuring that YB's databases are managed in compliance with this SOP. The department is also responsible for providing technical support to YB employees and contractors.</li>
 <li className='Content'>Database Administrators: The database administrators are responsible for managing and maintaining YB's databases, including backup and recovery procedures.</li>     
 <li className='Content'>End Users: End users are responsible for ensuring that the data entered into YB's databases is accurate and relevant.</li>
  <p className='Heading'>Database Management Procedures</p>
  <li>Database Design: The database design must be reviewed and approved by the IT department before implementation. The design must follow YB's standards and guidelines.</li>
  <li>Data Entry: End users must ensure that the data entered into YB's databases is accurate and relevant. Data must be entered in a timely manner.</li>
  <li> Database Maintenance: Database administrators must perform regular maintenance on YB's databases, including updating software and fixing any issues that arise.</li>
  <li>Backup and Recovery: YB's databases must be backed up regularly to ensure data availability in case of a disaster. The backup process must be documented and tested regularly. Recovery procedures must also be documented and tested.</li>
  <li> Security: YB's databases must be secured to ensure data confidentiality. Access to the databases must be limited to authorized personnel. Password policies must be enforced. Data encryption must be used when transferring data over the network.</li>
  <p className='Heading'>Reporting</p>
  <p>IT department must report any issues related to database management to the management team. Reports must be submitted on a regular basis.</p>
   <p className='Heading'>Training</p>
   <p>All YB employees and contractors responsible for managing YB's databases must receive training on this SOP.</p>
   <p className='Heading'>References</p>
   <p>This SOP is based on industry best practices, YB's policies and guidelines, and applicable laws and regulations.</p>
   <p className='Heading'>Review and Revision</p>
   <p>This SOP must be reviewed annually and updated as necessary to ensure compliance with current policies and regulations.</p>
   <p></p>
   <h3>SOP about Incident Management</h3>
   <p></p>
   <p className='Heading'>Purpose</p>
   <p>The purpose of this SOP is to establish guidelines for the effective management of incidents that may affect the operations of Your Bank (YB). This includes incidents such as security breaches, system failures, natural disasters, and other unexpected events.</p>
   <p className='Heading'>Scope</p>
   <p>This SOP applies to all employees and contractors of YB who are involved in incident management.</p>
   <p className='Heading'>Incident Management Procedures</p>
   <li>Incident Identification: Incidents can be identified by any employee or contractor who becomes aware of a potential issue. Incidents may also be identified through automated monitoring tools, security alerts, or other means. All incidents must be reported to the incident management team.</li>
    <li> Incident Categorization: Incidents must be categorized according to their impact and severity. This allows the incident management team to prioritize their response and allocate resources accordingly.</li>
    <li>Incident Investigation and Diagnosis: The incident management team must investigate and diagnose the cause of the incident. This may involve analyzing logs, interviewing witnesses, or performing other investigative tasks.</li>
    <li> Incident Resolution: The incident management team must develop and implement a plan to resolve the incident as quickly as possible. This may involve implementing temporary workarounds, restoring systems from backups, or taking other corrective actions.</li>
    <li>Incident Reporting and Communication: The incident management team must report the incident to the appropriate stakeholders, including management, affected customers, and regulatory agencies as required. Communication must be timely, accurate, and transparent.</li>
    <li> Incident Review and Closure: Once the incident has been resolved, the incident management team must conduct a review to identify any opportunities for improvement. The incident must then be formally closed.</li>
    <p className='Heading'>Roles and Responsibilities</p>
    <li>Incident Management Team: The incident management team is responsible for coordinating the response to incidents and ensuring that incidents are resolved as quickly as possible. The team must also ensure that all incident management procedures are followed.</li>
    <li>Incident Responders: Incident responders are responsible for investigating and diagnosing incidents, developing and implementing a plan to resolve the incident, and communicating with stakeholders as required.</li>
    <li>Business Continuity Team: The business continuity team is responsible for developing and maintaining YB's business continuity plans, including plans for responding to incidents.</li>
    <li>IT Department: The IT department is responsible for providing technical support to the incident management team and ensuring that all systems and applications are available and functioning properly.</li>
    <p className='Heading'>Training</p>
    <p>All employees and contractors involved in incident management must receive training on this SOP, including incident identification, categorization, investigation, resolution, reporting, and communication.</p>
    <p className='Heading'>References</p>
    <p>This SOP is based on industry best practices, relevant laws and regulations, and YB's policies and procedures.</p>
    <p className='Heading'>Review and Revision</p>
    <p>This SOP must be reviewed annually and updated as necessary to ensure that it remains current and effective. YB's incident management team must also conduct regular drills and exercises to ensure that all employees and contractors are prepared to respond to incidents in a timely and effective manner.
</p>
<p></p>
<h3>SOP about Middleware</h3>
<p></p>
<p className='Heading'>Purpose</p>
<p>The purpose of this SOP is to establish guidelines for the effective management of middleware in Your Bank (YB). This includes the deployment, configuration, maintenance, and monitoring of middleware components used to support YB's applications and services.</p>
<p className='Heading'>Scope</p>
<p>This SOP applies to all employees and contractors of YB who are involved in the management of middleware components.</p>
<p className='Heading'>Middleware Management Procedures</p>
<li>Middleware Deployment: All middleware components must be deployed in accordance with YB's standards and procedures. This includes ensuring that the necessary software licenses have been obtained, that the middleware components are compatible with YB's applications and infrastructure, and that the deployment is properly documented.</li>
<li> Middleware Configuration: Middleware components must be configured in accordance with YB's standards and procedures. This includes configuring security settings, performance tuning parameters, and other settings as necessary to ensure that the middleware components operate efficiently and securely.</li>
<li>Middleware Maintenance: Middleware components must be maintained in accordance with YB's standards and procedures. This includes applying patches and updates, monitoring for vulnerabilities, and performing other maintenance tasks as necessary to ensure that the middleware components remain secure and functional.</li>
<li>Middleware Monitoring: Middleware components must be monitored in accordance with YB's standards and procedures. This includes monitoring performance, availability, and security, and responding to alerts and incidents in a timely and effective manner.</li>
<li>Middleware Decommissioning: Middleware components that are no longer needed must be decommissioned in accordance with YB's standards and procedures. This includes ensuring that all data has been properly backed up and migrated to a new system as necessary.
</li>
<p className='Heading'>Roles and Responsibilities</p>
<li>Middleware Administrator: The middleware administrator is responsible for the deployment, configuration, maintenance, and monitoring of middleware components. This includes ensuring that all middleware components are deployed and configured in accordance with YB's standards and procedures, and that they are properly maintained and monitored.</li>
<li> IT Department: The IT department is responsible for providing technical support to the middleware administrator and ensuring that all systems and applications are available and functioning properly.</li>
<p className='Heading'>Training</p>
<p>All employees and contractors involved in middleware management must receive training on this SOP, including middleware deployment, configuration, maintenance, monitoring, and decommissioning.
</p>
<p className='Heading'>References</p>
<p>This SOP is based on industry best practices, relevant laws and regulations, and YB's policies and procedures.</p>
<p className='Heading'>Review and Revision</p>
<p>This SOP must be reviewed annually and updated as necessary to ensure that it remains current and effective. YB's middleware administrator must also conduct regular reviews and audits to ensure that all middleware components are properly deployed, configured, maintained, and monitored.
</p>
<h3>SOP about Project Managament Team</h3>
<p></p>
<p className='Heading'>Purpose</p>
<p>The purpose of this SOP is to establish guidelines for the effective management of projects within Your Bank (YB). This includes the planning, execution, monitoring, and control of projects, as well as the management of project team members and stakeholders.</p>
<p className='Heading'>Scope</p>
<p>This SOP applies to all employees and contractors of YB who are involved in the management of projects.</p>
<p className='Heading'>Project Management Procedures</p>
<li>Project Initiation: All projects must be initiated in accordance with YB's project management standards and procedures. This includes identifying project objectives, scope, stakeholders, and constraints, and obtaining approval from the appropriate stakeholders.</li>
<li>Project Planning: All projects must be planned in accordance with YB's project management standards and procedures. This includes defining project scope, schedule, budget, risks, and quality criteria, and developing a project plan that details the necessary resources, tasks, and milestones.</li>
<li>Project Execution: All projects must be executed in accordance with YB's project management standards and procedures. This includes assigning tasks to project team members, monitoring progress, addressing issues and risks, and communicating project status to stakeholders.</li>
<li>Project Monitoring and Control: All projects must be monitored and controlled in accordance with YB's project management standards and procedures. This includes tracking progress against the project plan, managing changes to the project scope, schedule, and budget, and ensuring that the project team members are adhering to the project plan.</li>
<li>Project Closure: All projects must be closed in accordance with YB's project management standards and procedures. This includes verifying that project deliverables have been completed, obtaining final approvals from stakeholders, and archiving project documentation.</li>
<p className='Heading'>Roles and Responsibilities</p>
<li>Project Manager: The project manager is responsible for overall project management, including planning, execution, monitoring and control, and closure. This includes ensuring that the project is completed on time, within budget, and to the satisfaction of stakeholders.</li>
<li>Project Team Members: Project team members are responsible for completing assigned tasks in accordance with the project plan and providing regular progress updates to the project manager.</li>
<li>Stakeholders: Stakeholders are responsible for providing input and feedback on the project, and for approving the project plan and final deliverables.</li>
<p className='Heading'>Training</p>
<p>All employees and contractors involved in project management must receive training on this SOP, including project initiation, planning, execution, monitoring and control, and closure.</p>
<p className='Heading'>References</p>
<p>This SOP is based on industry best practices, relevant laws and regulations, and YB's policies and procedures.</p>
<p className='Heading'>Review and Revision</p>
<p>This SOP must be reviewed annually and updated as necessary to ensure that it remains current and effective. YB's project management team must also conduct regular reviews and audits to ensure that all projects are being managed in accordance with this SOP.
</p>
    
    </div>
    </div>
         );
        }
}
const Example=()=>{
    const componentRef=useRef();
   const handlePrint=useReactToPrint({
       content:()=>componentRef.current,
    });


return (
   <div>
   <ComponentToPrint ref={componentRef}/>
   <button onClick={handlePrint}>Download</button>
    </div>
);
};

render(<Example/>,document.querySelector("#root"));
export default ComponentToPrint;