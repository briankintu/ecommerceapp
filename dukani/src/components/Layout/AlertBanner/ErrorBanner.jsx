// Assuming that the required modules are properly imported or available in your environment

import { useMemo } from 'react'
import  React from 'react'
import  { Callout } from '@radix-ui/themes'
import { FiAlertTriangle } from 'react-icons/fi'

export const ErrorBanner = ({ error, overrideHeading, children }) => {
    const messages = useMemo(() => {
        if (!error) return [];
        let eMessages = error?._server_messages ? JSON.parse(error?._server_messages) : [];
        eMessages = eMessages.map((m) => {
            try {
                return JSON.parse(m);
            } catch (e) {
                return m;
            }
        });

        if (eMessages.length === 0) {
            const indexOfFirstColon = error?.exception?.indexOf(':');
            if (indexOfFirstColon) {
                const exception = error?.exception?.slice(indexOfFirstColon + 1);
                if (exception) {
                    eMessages = [{
                        message: exception,
                        title: "Error"
                    }];
                }
            }

            if (eMessages.length === 0) {
                eMessages = [{
                    message: error?.message,
                    title: "Error",
                    indicator: "red"
                }];
            }
        }
        return eMessages;
    }, [error]);

    const parseHeading = (message) => {
        if (message?.title === 'Message' || message?.title === 'Error') return undefined;
        return message?.title;
    };

    if (messages.length === 0 || !error) return null;

    return React.createElement(ErrorCallout, null,
        messages.map((m, i) => React.createElement('div', { key: i, dangerouslySetInnerHTML: {
            __html: m.message
        }})),
        children
    );
};

export const ErrorCallout = ({ children }) => {
    return React.createElement(Callout.Root, { color: "red", role: "alert" },
        React.createElement(Callout.Icon, null,
            React.createElement(FiAlertTriangle, { size: '18' })
        ),
        React.createElement(Callout.Text, null, children)
    );
};

