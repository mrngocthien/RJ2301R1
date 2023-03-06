export default function LoginForm({formValues, handleChange, handleSubmit}) {
  return (
    <form>
      <label>
        Username:
        <input type="text" name="username" value={formValues.username} onChange={handleChange} />
      </label><br/>
      <label>
        Password:
        <input type="password" name="password" value={formValues.password} onChange={handleChange} />
      </label><br/>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
}
