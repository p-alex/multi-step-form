import { useEffect, useState } from 'react';
import { infoSchema } from '../schemas/infoSchema';
import useVerifyZodSchema from './useVerifyZodSchema';

export const STEP_INFO = {
  info: {
    title: 'Your info',
    description: 'Please provide your name, email address, and phone number',
  },
  plan: {
    title: 'Select plan',
    description: 'You have the option of monthly or yearly billing',
  },
  addons: {
    title: 'Pick add-ons',
    description: 'Add-ons help enhance your gaming experience',
  },
  confirm: {
    title: 'Finishing up',
    description: 'Double-check everything looks OK before confirming',
  },
  finish: {
    title: 'Thank you!',
    description:
      'Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.',
  },
};
export const STEP_INFO_LIST = Object.keys(STEP_INFO) as [keyof typeof STEP_INFO];
export type STEP_TYPE = keyof typeof STEP_INFO;
export const MAX_STEPS = Object.keys(STEP_INFO).length - 1;

export const PLANS = {
  arcade: 9,
  advanced: 12,
  pro: 15,
};
export const PLANS_LIST = Object.keys(PLANS) as [PlansType];
export type PlansType = keyof typeof PLANS;

export interface FormState {
  name: string;
  email: string;
  phone: string;
  plan: PlansType;
  isYearlyBilling: boolean;
  addons: AddonsListType;
  price: number;
}

export const ADDONS = {
  online_service: {
    description: 'Access to multiplayer games',
    price: 1,
  },
  larger_storage: {
    description: 'Extra 1TB of cloud space',
    price: 2,
  },
  customizable_profile: {
    description: 'Custom theme on your profile',
    price: 2,
  },
};
export type AddonsListType = [keyof typeof ADDONS] | [];
export type AddonsType = keyof typeof ADDONS;

export type ErrorsType = {
  [key: string]: string[];
};

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  plan: 'arcade',
  isYearlyBilling: false,
  addons: [],
  price: 0,
};

const useMultiStepForm = () => {
  const [step, setStep] = useState<keyof typeof STEP_INFO>('info');
  const [stepIndex, setStepIndex] = useState(0);
  const [formState, setFormState] = useState<FormState>(initialState);

  const { name, email, phone } = formState;

  const { verifySchema, fieldErrors } = useVerifyZodSchema<{
    name: string;
    email: string;
    phone: string;
  }>(infoSchema, { name, email, phone });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChangePlan = (plan: PlansType) => {
    setFormState((prevState) => ({ ...prevState, plan }));
  };

  const handleSkipToStep = (step: STEP_TYPE) => {
    const index = STEP_INFO_LIST.indexOf(step);
    setStepIndex(index);
    setStep(step);
  };

  const handleSwitchBilling = () => {
    setFormState((prevState) => ({
      ...prevState,
      isYearlyBilling: !prevState.isYearlyBilling,
    }));
  };

  const goNext = () => {
    if (step === 'info') {
      const isValid = verifySchema();
      if (!isValid) return;
      const temp = stepIndex;
      setStepIndex((prevState) => prevState + 1);
      setStep(STEP_INFO_LIST[temp + 1]);
    } else {
      const temp = stepIndex;
      setStepIndex((prevState) => prevState + 1);
      setStep(STEP_INFO_LIST[temp + 1]);
    }
  };

  const goBack = () => {
    const temp = stepIndex;
    setStepIndex((prevState) => prevState - 1);
    setStep(STEP_INFO_LIST[temp - 1]);
  };

  const handleAddAddon = (addon: AddonsType) => {
    const addons = formState.addons as [AddonsType];
    addons.push(addon);
    setFormState((prevState) => ({
      ...prevState,
      addons,
    }));
  };

  const handleRemoveAddon = (addon: AddonsType) => {
    const addons = formState.addons.filter((item) => item !== addon) as [AddonsType];
    setFormState((prevState) => ({
      ...prevState,
      addons,
    }));
  };

  const handleCalculatePrice = () => {
    let price = 0;
    let isYearly = formState.isYearlyBilling;
    if (isYearly) {
      price += PLANS[formState.plan] * 10;
    } else {
      price += PLANS[formState.plan];
    }
    for (let i = 0; i < formState.addons.length; i++) {
      const currentAddon = formState.addons[i] as keyof typeof ADDONS;
      if (isYearly) {
        price += ADDONS[currentAddon].price * 10;
      } else {
        price += ADDONS[currentAddon].price;
      }
    }
    setFormState((prevState) => ({ ...prevState, price }));
  };

  const handleResetForm = () => {
    setFormState({ ...initialState });
    setStep('info');
    setStepIndex(0);
  };

  useEffect(() => {
    if (step === 'confirm') handleCalculatePrice();
  }, [step]);

  return {
    step,
    stepIndex,
    formState,
    goBack,
    goNext,
    handleInputChange,
    handleChangePlan,
    handleSwitchBilling,
    handleAddAddon,
    handleRemoveAddon,
    handleSkipToStep,
    handleResetForm,
    fieldErrors,
  };
};

export default useMultiStepForm;
