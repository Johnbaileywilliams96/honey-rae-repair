import { useEffect, useState } from "react";
import { getStaffUsers } from "../../services/userService";
import { User } from "../../users/user";

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
              <User user={employeeObj} />
            </>
          );
        })}
      </div>
    </>
  );
};
