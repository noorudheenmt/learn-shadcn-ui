"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export default function TablePage() {
  return (
    <div className="min-h-screen bg-zinc-50 p-6 dark:bg-zinc-950 flex items-center justify-center">
      <div className="w-full max-w-4xl rounded-xl border bg-white shadow-sm dark:bg-zinc-900 dark:border-zinc-800">
        <Table>
          <TableCaption className="py-4 text-sm text-zinc-500">
            A list of your recent invoices
          </TableCaption>

          <TableHeader>
            <TableRow className="bg-zinc-100 dark:bg-zinc-800">
              <TableHead className="px-6 py-3 font-semibold">Invoice</TableHead>
              <TableHead className="px-6 py-3 font-semibold">Status</TableHead>
              <TableHead className="px-6 py-3 font-semibold">Method</TableHead>
              <TableHead className="px-6 py-3 text-right font-semibold">
                Amount
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {invoices.map((invoice, index) => (
              <TableRow
                key={invoice.invoice}
                className={`
                  transition-colors
                  hover:bg-zinc-100 dark:hover:bg-zinc-800
                  ${index % 2 === 0 ? "bg-white dark:bg-zinc-900" : "bg-zinc-50 dark:bg-zinc-900/50"}
                `}
              >
                <TableCell className="px-6 py-4 font-medium">
                  {invoice.invoice}
                </TableCell>
                <TableCell className="px-6 py-4">
                  {invoice.paymentStatus}
                </TableCell>
                <TableCell className="px-6 py-4">
                  {invoice.paymentMethod}
                </TableCell>
                <TableCell className="px-6 py-4 text-right">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TableRow className="bg-zinc-100 dark:bg-zinc-800">
              <TableCell colSpan={3} className="px-6 py-4 font-semibold">
                Total
              </TableCell>
              <TableCell className="px-6 py-4 text-right font-semibold">
                $2,500.00
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
