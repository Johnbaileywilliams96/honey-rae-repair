export const CustomerDetails = () => {
    // /customer/3
    // path="/customers/:customerId"

    const {customerId} = useParams()

    return <div>Customer #{customerId}</div>
}