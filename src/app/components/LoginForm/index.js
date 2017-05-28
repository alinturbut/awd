import {TextField, Card, CardHeader, CardActions, RaisedButton} from 'material-ui';
import React from 'react';

const styles = {
    card: {
        width: "50vw",
        display: "center",
        marginTop: "4vh"
    },

    textField: {
        display: "block",
        width: "48vw",
        marginLeft: "1vw"
    },

    cardHeader: {
        textAlign: 'center'
    }
};

class LoginForm extends React.Component {
    render() {
        return (
            <div className="row center-xs center-lg center-md">
                <Card
                    style={styles.card}>
                    <div className="row center-xs middle-xs">
                    <CardHeader
                        title="Input your credentials below"
                        style={styles.cardHeader}
                    />
                    </div>
                    <TextField floatingLabelText="Username"
                               style={styles.textField}/>
                    <TextField floatingLabelText="Password"
                               style={styles.textField}/>
                    <CardActions>
                        <RaisedButton label="Login" />
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default LoginForm;

