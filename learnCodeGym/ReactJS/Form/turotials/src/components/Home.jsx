export default function Home({handleLogout}) {
    return(
        <>
            <h1>Wellcome to React Form</h1>
            <button onClick={handleLogout}>LogOut</button>
        </>
    )
}