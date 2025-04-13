import {  useState } from "react";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import {
  Page,
  Layout,
  Card,
  BlockStack,
  FormLayout,
  TextField,
  Form,
  Button

} from "@shopify/polaris";

import { authenticate } from "../shopify.server";
export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);
  return null;
};
export const action = async ({ request }: ActionFunctionArgs) => {
  const admin  = await authenticate.admin(request);
  return null;
};

export default function Index() {

  const [author, setAuthor] = useState('');
  const [testimonial, setTestimonial] = useState('');

  const handleSubmit = () => {
    console.log("OK");
  };

  return (
    <Page>
      <BlockStack gap="500">
        <Layout>
          <Layout.Section>
            <Card>
              <Form onSubmit={handleSubmit}>
                <FormLayout>
                  <TextField
                    value={testimonial}
                    onChange={setTestimonial}
                    label="Testimonial"
                    type="text"
                    autoComplete="true"
                    helpText={
                    <span>
                      It will display on the app's on the store
                    </span>
                    }
                  />
                  <TextField
                    value={author}
                    onChange={setAuthor}
                    label="Author"
                    type="text"
                    autoComplete= "true"
                    helpText={
                    <span>
                      It will display on the app's on the store
                    </span>
                    }
                  />


                  <Button submit>Submit</Button>
                </FormLayout>
              </Form>
            </Card>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
}
