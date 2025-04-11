import { useEffect, useState } from "react";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { useActionData, useNavigation, useSubmit } from "@remix-run/react";
import {
  Page,
  Layout,
  Text,
  Card,
  BlockStack,
  Box,
  List,
  Link,
  InlineStack,

import { authenticate } from "../shopify.server";
export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);
  return null;
};
export const action = async ({ request }: ActionFunctionArgs) => {
  const { admin } = await authenticate.admin(request);
  return null;
};

export default function Index() {

  const [author, setAuthor] = useState('');
  const [testimonial, setTestimonial] = useState('');

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
                    label="Email"
                    type="text"
                    autoComplete="email"
                    helpText={
                    <span>
                      We’ll use this email address to inform you on future changes to
                      Polaris.
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
