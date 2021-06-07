function ErrorMessages({errors}) {
    return (
        errors.map((error, index) => <small style={{margin: '0'}} key={index} id="emailHelp" className="form-text text-danger">
        {error}
      </small>)
    )
}
export default ErrorMessages;