import styles from './App.module.scss';
import { Input } from './components/input/input';
import { FormLabel } from './components/form-label/form-label';
import { SubmitButton } from './components/submit-button/submit-button';

function App() {
    return (
        <div>
            <form>
                <FormLabel htmlFor="name" className={styles.formLabel}>
                    Name
                </FormLabel>
                <Input id="name" name="name" />
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" name="email" />
                <FormLabel htmlFor="number" htmlFor="numbe">
                    Number
                </FormLabel>
                <Input id="number" name="number" />
                <FormLabel htmlFor="message">Message</FormLabel>
                <Input id="mesage" name="message" />
                <SubmitButton />
            </form>
        </div>
    );
}

export default App;
