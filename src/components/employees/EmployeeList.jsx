import { useEffect, useState } from "react";
import { getStaffUsers } from "../../services/userService";
import { User } from "../../users/user";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getStaffUsers().then((staffArray) => {
      setEmployees(staffArray);
    });
  }, []);

  return (
    <>
      <div className="employees">
        {employees.map((employeeObj) => {
          return (
            <>
            <Link to={`/employees/${employeeObj.id}`} key={employeeObj.id}>
              <User user={employeeObj} key={employeeObj.id}/>
            </Link>
            </>
          );
        })}
      </div>
    </>
  );
};
