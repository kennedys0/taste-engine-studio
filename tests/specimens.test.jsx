import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SpecimenFAQ from '../src/components/specimens/SpecimenFAQ';
import SpecimenTabs from '../src/components/specimens/SpecimenTabs';
import SpecimenForm from '../src/components/specimens/SpecimenForm';
import SpecimenDataTable from '../src/components/specimens/SpecimenDataTable';
import SpecimenDialog from '../src/components/specimens/SpecimenDialog';
import SpecimenHeroDemo from '../src/components/specimens/SpecimenHeroDemo';
import SpecimenImageCard from '../src/components/specimens/SpecimenImageCard';

describe('Shared UI Specimens & Interactive Behavior', () => {
  it('SpecimenFAQ expands and collapses items with correct aria attributes', () => {
    const testItems = [
      { id: 'q1', question: 'Question 1', answer: 'Answer 1' },
      { id: 'q2', question: 'Question 2', answer: 'Answer 2' },
    ];
    render(<SpecimenFAQ styleId="neo-brutalism" items={testItems} />);

    const btn1 = screen.getByText('Question 1').closest('button');
    const btn2 = screen.getByText('Question 2').closest('button');

    // First item is open by default
    expect(btn1).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText('Answer 1')).toBeInTheDocument();

    // Toggle item 1
    fireEvent.click(btn1);
    expect(btn1).toHaveAttribute('aria-expanded', 'false');

    // Toggle item 2
    fireEvent.click(btn2);
    expect(btn2).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText('Answer 2')).toBeInTheDocument();
  });

  it('SpecimenTabs switches panels when tab is clicked', () => {
    render(<SpecimenTabs styleId="neo-brutalism" />);

    const overviewTab = screen.getByRole('tab', { name: /overview/i });
    const tokensTab = screen.getByRole('tab', { name: /design dna/i });

    expect(overviewTab).toHaveAttribute('aria-selected', 'true');
    expect(tokensTab).toHaveAttribute('aria-selected', 'false');
    expect(screen.getByRole('tabpanel')).toHaveTextContent(/Taste Engine examines user intent/i);

    // Click Design DNA tab
    fireEvent.click(tokensTab);
    expect(tokensTab).toHaveAttribute('aria-selected', 'true');
    expect(overviewTab).toHaveAttribute('aria-selected', 'false');
    expect(screen.getByRole('tabpanel')).toHaveTextContent(/typography, spacing, surface geometry/i);
  });

  it('SpecimenForm validates inputs locally and shows truthful feedback', async () => {
    render(<SpecimenForm styleId="neo-brutalism" />);

    const submitBtn = screen.getByRole('button', { name: /validate inputs \(demo\)/i });

    // Click submit with empty form -> validation errors
    fireEvent.click(submitBtn);
    expect(screen.getByText(/full name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/valid email address is required/i)).toBeInTheDocument();

    // Fill valid data
    const nameInput = screen.getByPlaceholderText(/alex morgan/i);
    const emailInput = screen.getByPlaceholderText(/alex@example.com/i);
    const passInput = screen.getByPlaceholderText(/min. 8 characters/i);
    const termsCheckbox = screen.getByLabelText(/acknowledge this is a front-end demonstration/i);

    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });
    fireEvent.change(emailInput, { target: { value: 'jane@example.com' } });
    fireEvent.change(passInput, { target: { value: 'supersecret123' } });
    fireEvent.click(termsCheckbox);

    // Submit valid form
    fireEvent.click(submitBtn);
    await waitFor(() => {
      expect(
        screen.getByText(/demo validation passed\. no account was accessed or created\./i)
      ).toBeInTheDocument();
    });
  });

  it('SpecimenDataTable filters search results and displays empty state on impossible query', () => {
    render(<SpecimenDataTable styleId="neo-brutalism" />);

    const searchInput = screen.getByLabelText(/search sample projects/i);

    // Type query matching item
    fireEvent.change(searchInput, { target: { value: 'Glassmorphism' } });
    expect(screen.getByText(/Glassmorphism Material Fidelity Audit/i)).toBeInTheDocument();

    // Type query with no matches
    fireEvent.change(searchInput, { target: { value: 'ZZZZZZZZ_NO_MATCH' } });
    expect(screen.getByText(/no sample records match your filters/i)).toBeInTheDocument();

    // Click reset button
    const resetBtn = screen.getByRole('button', { name: /reset all filters/i });
    fireEvent.click(resetBtn);
    expect(screen.getByText(/Glassmorphism Material Fidelity Audit/i)).toBeInTheDocument();
  });

  it('SpecimenDialog handles open, close, and Escape key', () => {
    render(<SpecimenDialog styleId="neo-brutalism" />);

    const openBtn = screen.getByRole('button', { name: /open accessible modal/i });
    fireEvent.click(openBtn);

    // Dialog should be visible
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/Taste Engine Modal Demo/i)).toBeInTheDocument();

    // Press Escape
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('SpecimenHeroDemo maintains transparent background and balanced non-jumping 380px x 430px sizing across styles', () => {
    const { container } = render(<SpecimenHeroDemo />);

    // Initially neo-brutalism
    let stage = container.querySelector('[data-taste-style="neo-brutalism"]');
    expect(stage).toBeInTheDocument();
    expect(stage.style.background).toBe('transparent');
    expect(stage.style.maxWidth).toBe('380px');
    expect(stage.style.height).toBe('430px');

    // Switch to Glassmorphism
    fireEvent.click(screen.getByRole('button', { name: /glassmorphism/i }));
    stage = container.querySelector('[data-taste-style="glassmorphism"]');
    expect(stage).toBeInTheDocument();
    expect(stage.style.background).toBe('transparent');
    expect(stage.style.maxWidth).toBe('380px');
    expect(stage.style.height).toBe('430px');

    // Switch to Claymorphism
    fireEvent.click(screen.getByRole('button', { name: /claymorphism/i }));
    stage = container.querySelector('[data-taste-style="claymorphism"]');
    expect(stage).toBeInTheDocument();
    expect(stage.style.background).toBe('transparent');
    expect(stage.style.maxWidth).toBe('380px');
    expect(stage.style.height).toBe('430px');

    // Switch to Swiss Editorial
    fireEvent.click(screen.getByRole('button', { name: /swiss editorial/i }));
    stage = container.querySelector('[data-taste-style="swiss-editorial"]');
    expect(stage).toBeInTheDocument();
    expect(stage.style.background).toBe('transparent');
    expect(stage.style.maxWidth).toBe('380px');
    expect(stage.style.height).toBe('430px');
  });

  it('SpecimenImageCard preserves content hierarchy, renders banner image asset, and provides interactive like button', () => {
    const { unmount, container } = render(<SpecimenImageCard styleId="neo-brutalism" title="Test Card" />);
    expect(screen.getByText('Test Card')).toBeInTheDocument();
    const banner = screen.getByRole('img', { name: 'Test Card' });
    expect(banner).toBeInTheDocument();
    const likeBtn = screen.getByRole('button', { name: /42/i });
    expect(likeBtn).toBeInTheDocument();
    fireEvent.click(likeBtn);
    expect(screen.getByText('43')).toBeInTheDocument();
    const cardEl = container.firstElementChild;
    expect(cardEl.style.height).toBe('430px');
    expect(cardEl.style.maxWidth).toBe('380px');
    unmount();

    // Verify Swiss Editorial card has consistent banner image and heart like button
    const { unmount: unmountSwiss, container: containerSwiss } = render(<SpecimenImageCard styleId="swiss-editorial" title="Swiss Card" />);
    expect(screen.getByText('Swiss Card')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Swiss Card' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /42/i })).toBeInTheDocument();
    expect(containerSwiss.firstElementChild.style.height).toBe('430px');
    expect(containerSwiss.firstElementChild.style.maxWidth).toBe('380px');
    unmountSwiss();

    // Verify Claymorphism card has consistent banner image and heart like button
    const { unmount: unmountClay, container: containerClay } = render(<SpecimenImageCard styleId="claymorphism" title="Clay Card" />);
    expect(screen.getByText('Clay Card')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Clay Card' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /42/i })).toBeInTheDocument();
    expect(containerClay.firstElementChild.style.height).toBe('430px');
    expect(containerClay.firstElementChild.style.maxWidth).toBe('380px');
    unmountClay();
  });
});
