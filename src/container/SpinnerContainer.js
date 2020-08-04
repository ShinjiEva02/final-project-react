import { Spinner } from "../components/spinner/Spinner";
import { connect } from "react-redux";

const mapPropsToState = store => ({
    loading: store.loading
});

export default connect(mapPropsToState)(Spinner);
