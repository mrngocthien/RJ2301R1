export default function LoginForm({formValues, handleChange, handleSubmit}) {
  return (
    <form style={{width: 250, margin: "auto", background: 'wheat', padding:20}} onSubmit={handleSubmit}>
      <label style={{marginBottom:10}}>
        Username:
        <input type="text" name="username" value={formValues.username} onChange={handleChange} />
      </label><br/>
      <label style={{marginBottom:10}}>
        Password:
        <input type="password" name="password" value={formValues.password} onChange={handleChange} />
      </label><br/>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
    
  );
}
