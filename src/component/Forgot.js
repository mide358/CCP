const Forgot = () => {
  return (
    <div className="forgot">
      <form>
        <h1>Forgot Password</h1>
        <div className="form-group row">
          <label htmlFor="forgot" className="col-sm-3 col-form-label">
            Email
          </label>
          <div className="col-sm-9">
            <input type="email" className="form-control" id="forgot_email" />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary forgot_btn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Forgot;
