//REACT
import { useEffect } from 'react';
//REACT-ROUTER-DOM
import { useNavigate } from 'react-router-dom';
//AMPLIFY
import { Authenticator, useAuthenticator, useTheme, View, Image, Text, Heading, Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


const formFields = {
    signIn: {
        username: {
            label: "Email",
            placeholder: "Enter your email",
            isRequired: true,
            type: "email",
            order: 1
        },
        password: {
            label: "Password",
            placeholder: "Enter your password",
            isRequired: true,
            type: "password",
            order: 2
        }
    },
    signUp: {
        given_name: {
            label: "First Name",
            placeholder: "Enter your first name",
            isRequired: true,
            type: "text",
            order: 1
        },
        family_name: {
            label: "Last Name",
            placeholder: "Enter your last name",
            isRequired: true,
            type: "text",
            order: 2
        },
        username: {
            label: "Email",
            placeholder: "Enter your email",
            isRequired: true,
            type: "email",
            order: 3
        },
        password: {
            label: "Password",
            placeholder: "Enter your password",
            isRequired: true,
            type: "password",
            order: 4
        },
        confirm_password: {
            label: "Confirm Password",
            placeholder: "Confirm your password",
            isRequired: true,
            type: "password",
            order: 5
        },        
        phone_number: {
            label: "Phone Number",
            placeholder: "Enter your phone number",
            isRequired: true,
            type: "tel",
            order: 6,
            dialCode: "+1"
        }
    }
};


const components = {
    Footer() {
        const { tokens } = useTheme();

        return (
            <View textAlign="center" padding={tokens.space.large}>
                <Text color={tokens.colors.neutral[80]}>
                    &copy; All Rights Reserved
                </Text>
            </View>
        );
    },
    SignIn: {
        Footer() {
            const { toForgotPassword } = useAuthenticator();

            return (
                <View textAlign="center">
                    <Button
                        fontWeight="normal"
                        onClick={toForgotPassword}
                        size="small"
                        variation="link"
                    >
                        Forgot Password
                    </Button>
                </View>
            );
        },
    },
    SignUp: {
        Footer() {
            const { toSignIn } = useAuthenticator();

            return (
                <View textAlign="center">
                    <Button
                        fontWeight="normal"
                        onClick={toSignIn}
                        size="small"
                        variation="link"
                    >
                        Already have an account?
                    </Button>
                </View>
            );
        }
    }
};


export default function Home(): JSX.Element {
    const navigate = useNavigate();


    const { user, route } = useAuthenticator((context) => [context.user, context.route]);


    useEffect(() => {
        if (user) {
            navigate("/app");
        }
    }, [user]);


    if (user) return <></>;


    if (route === 'confirmSignUp') {
        return (
            <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center p-6 space-y-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-gray-600">CoreAssetTracker</h1>
                    <p className="text-lg sm:text-xl mb-10 text-gray-600">You got the verification link on your Email to verify your account.</p>
                    <div className="flex justify-center gap-5">
                        <button
                            className="bg-gray-600 text-white font-medium py-2.5 px-3.5 sm:py-3 sm:px-6 rounded-md flex items-center justify-center transition-all duration-200 hover:shadow-lg text-base sm:text-lg"
                            onClick={() => window.location.reload()}
                        >
                            Log In
                        </button>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center p-6 space-y-8">
            <div className="max-w-4xl mx-auto">
                <Authenticator
                    formFields={formFields}
                    components={components}
                />
            </div>
        </div>
    );
}