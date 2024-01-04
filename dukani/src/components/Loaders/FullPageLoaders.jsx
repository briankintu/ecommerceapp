import { Loader } from '../Loader';
import { Flex, Text } from '@radix-ui/themes'
import { FlexProps } from '@radix-ui/themes/dist/cjs/components/flex';
import { clsx } from 'clsx'

// Assuming that FlexProps and other required types are properly defined or available

export const FullPageLoader = ({ text = "Be patient you will have access soon ...", ...props }) => {
    return (
        Flex({ align: 'center', width: '100%', justify: 'center', ...props, className: clsx('h-screen', props.className) },
            Flex({ justify: 'center', align: 'center', direction: 'row', gap: '4' },
                Loader(),
                Text({ as: 'span', color: 'gray', className: 'cal-sans' }, text)
            )
        )
    );
};


