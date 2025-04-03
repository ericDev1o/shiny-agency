import { rest } from "msw";
import { setupServer } from "msw/node";
import {
    waitFor,
    screen,
    waitForElementToBeRemoved,
} from "@testing-library/react";
import Freelances from "./";
import { render, Wrapper } from "../../utils/test";

it("should render without crash", async () => {
    render(<Freelances />, { wrapper: Wrapper });
    expect(screen.getByTestId("loader")).toBeTruthy();
    await waitForElementToBeRemoved(() => screen.getByTestId("loader"));
    await waitFor(() => {
        expect(screen.getByText("Harry Potter")).toBeTruthy();
        expect(screen.getByText("Hermione Granger")).toBeTruthy();
    });
});

const freelancersMockedData = [
    {
        name: "Harry Potter",
        job: "Magicien frontend",
        picture: "",
    },
    {
        name: "Hermione Granger",
        job: "Magicienne fullstack",
        picture: "",
    },
];

const server = setupServer(
    rest.get("http://localhost:800/freelances", (req, res, ctx) => {
        return res(ctx.json({ freelancersList: freelancersMockedData }));
    })
);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
